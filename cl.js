const sortableList = document.querySelector(".sortable-list");
const items = document.querySelectorAll(".item");


items.forEach(item =>{
    item.addEventListener("dragstart", () =>{
        setTimeout(() => item.classList.add("dragging"), 0);
        
    });
    //remove drag class from item on drag item
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector(".dragging")
    //getting all items excepct currently dragging
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    //finding the sibling in which place we place it
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    sortableList.insertBefore(draggingItem, nextSibling)
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault())