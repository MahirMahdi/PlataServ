import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

export default function Chip({ name, remove }) {
  return (
    <Tag
      size="md"
      key="sm"
      borderRadius="full"
      variant="solid"
      colorScheme="gray"
    >
      <TagLabel>{name}</TagLabel>
      <TagCloseButton onClick={remove} />
    </Tag>
  );
}
