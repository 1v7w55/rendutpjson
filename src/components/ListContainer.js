import { useEffect, useState } from "react";

export default function ListContainer({
  initialItems = [],
  availableActions = {
    add: true,
    remove: true,
    edit: true,
  },
  ListItem,
  AddForm,
}) {
  const [items, setItems] = useState(initialItems);
  const listeners = {};
  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  return (
    <>
      {<AddForm onSubmit={listeners.add} />}
      {items.map(
        (item) =>
          (
            <ListItem
              item={item}
            />
          )
      )}
    </>
  );
}
