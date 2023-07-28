import { Tag,  TagLabel, TagRightIcon, TagLeftIcon } from "@chakra-ui/react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";


export default function Chip({ name, remove, add }) {
  return (
    <Tag
      size="lg"
      key="sm"
      borderRadius="full"
      variant="solid"
      colorScheme="gray"
    >
      <TagLeftIcon onClick={() => remove(name)} as={AiFillMinusCircle} cursor="pointer"/>
      <TagLabel>{name}</TagLabel>
      <TagRightIcon onClick={()=>add(name)} as={AiFillPlusCircle} cursor="pointer"/>
    </Tag>
  );
}
