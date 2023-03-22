import Product from "../products/product.js"

export default async function getSupplies(req,res){
    // removing duplicate ingredients and sending them for ordering new supplies.
    try {
        let allIngredients = []
        let duplicateIngredientsRemoved = []
        const supplies = await Product.find({}, 'ingredients')
        supplies.map(supply => supply.ingredients.map(sup => allIngredients.push(sup)))
        allIngredients.map(ingredient => {
            if(!duplicateIngredientsRemoved.some(ingre => ingre.name === ingredient.name)){
                duplicateIngredientsRemoved.push(ingredient)
            }})
        res.json({supplies:duplicateIngredientsRemoved})
    } catch (error) {
        res.json({error})
    }
}