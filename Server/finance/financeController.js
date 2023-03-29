import buildDailyReport, { buildCustomReport, buildMonthlyReport} from "../query/queryFunctions.js";

export default async function bankingInformationReport(req,res){

    try {

        const type = req.body.type;
        
        if (type === 'daily'){
            const reports = await buildDailyReport("Sales",req.body.date);
            const banking_info_reports = generateBankingInformationReport(reports);
            res.json({reports:banking_info_reports});
        }

        else if (type === 'custom'){
            const reports = await buildCustomReport("Sales",req.body.start_date, req.body.end_date );
            const banking_info_reports = generateBankingInformationReport(reports);
            res.json({reports:banking_info_reports});
        }

        else{
            const reports = await buildMonthlyReport("Sales",req.body.month);
            const banking_info_reports = generateBankingInformationReport(reports);
            res.json({reports:banking_info_reports});
        }

    } catch (error) {
        console.log(error);
    }
}

export async function cashReport(req,res){

    try {

        const type = req.body.type;

        if (type === 'daily'){
            const reports = await buildDailyReport("Sales",req.body.date);
            const cash_reports = generateCashReport(reports);
            res.json({reports:cash_reports});
        }

        else if (type === 'custom'){
            const reports = await buildCustomReport("Sales",req.body.start_date, req.body.end_date );
            const cash_reports = generateCashReport(reports);
            res.json({reports:cash_reports});
        }

        else{
            const reports = await buildMonthlyReport("Sales",req.body.month);
            const cash_reports = generateCashReport(reports);
            res.json({reports:cash_reports});
        }

    } catch (error) {
        console.log(error);
    }

}

function filterByPaymentMethod(report_type,sales,value){

    const data = sales.filter(sale => sale.payment_method === value);
    const data_transaction_amount = Number(data.reduce((acc,curr) => acc + curr.total_price, 0).toFixed(2));
    
    if(report_type === 'bank') return {label: value, transaction_amount: data_transaction_amount, transaction_count: data.length};
    
    else return {type:'payment_method',label: value, transaction_amount: data_transaction_amount};
}

function filterByOrderPoint(report_type,sales,value){

    const data = sales.filter(sale => sale.order_point === value);
    const data_transaction_amount = Number(data.reduce((acc,curr) => acc + curr.total_price, 0).toFixed(2));
    
    if(report_type === 'bank') return {label: value, transaction_amount: data_transaction_amount, transaction_count: data.length};
    
    else return {type:'order_point',label: value, transaction_amount: data_transaction_amount};
}

function filterByDestination(report_type,sales,value){

    const data = sales.filter(sale => sale.destination === value);
    const data_transaction_amount = Number(data.reduce((acc,curr) => acc + curr.total_price, 0).toFixed(2));
    
    if(report_type === 'bank') return {label: value, transaction_amount: data_transaction_amount, transaction_count: data.length};
    
    else return {type:'destination',label: value, transaction_amount: data_transaction_amount};
}

function calculateGrossSales(data){
    const gross_sales = Number(data.reduce((acc,curr) => acc + curr.total_price, 0).toFixed(2));

    return {label: 'Gross sales', transaction_amount: gross_sales};
}

function generateBankingInformationReport(data){

    const credit_card = filterByPaymentMethod('bank',data,'Credit card');
    const cash = filterByPaymentMethod('bank',data,'Cash');
    const debit_card = filterByPaymentMethod('bank',data,'Debit card');

    const mobile = filterByOrderPoint('bank',data,'Mobile');
    const uber_eats = filterByOrderPoint('bank',data,'Uber eats');

    return [credit_card, cash, debit_card, mobile, uber_eats];
}

function generateCashReport(data){

    const credit_card = filterByPaymentMethod('cash',data,'Credit card');
    const cash = filterByPaymentMethod('cash',data,'Cash');
    const debit_card = filterByPaymentMethod('cash',data,'Debit card');

    const mobile = filterByOrderPoint('cash',data,'Mobile');
    const uber_eats = filterByOrderPoint('cash',data,'Uber eats');
    const counter = filterByOrderPoint('cash',data,'Counter');
    
    const dine_in = filterByDestination('cash',data,'Dine in');
    const delivery = filterByDestination('cash',data,'Delivery');
    const takeout = filterByDestination('cash',data,'Take out');

    const gross_sales = calculateGrossSales(data);

    return [credit_card, cash, debit_card, mobile, uber_eats, counter, dine_in, delivery, takeout, gross_sales];
}

