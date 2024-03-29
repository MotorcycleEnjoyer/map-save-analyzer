import React from "react";

function ItemList({
    handleSearchChange,
    setObjectsToRemove,
    nameFilter,
    objectsToRemove,
    details,
    sortSpawnedItems,
    spawnedItems,
    handleRemoveObjects,
    handleCheckBox,
}) {
    return (
        <table className="spawnedItemsTable">
            <caption>
                FILTER RESULTS:{" "}
                <input
                    type="text"
                    onChange={handleSearchChange}
                    value={nameFilter}
                ></input>{" "}
                {objectsToRemove.length >= 1 && (
                    <button
                        style={{ padding: "1rem" }}
                        onClick={handleRemoveObjects}
                    >
                        DELETE {objectsToRemove.length} OBJECTS
                    </button>
                )}
                <div>
                    {details.numItems} Items in {details.mapName}
                </div>
            </caption>
            <thead>
                <tr>
                    <th
                        scope="col"
                        className="checkBoxHeader"
                        onClick={() => {
                            if (objectsToRemove.length > 0) {
                                setObjectsToRemove(() => []);
                            } else {
                                setObjectsToRemove(() => [...spawnedItems]);
                            }
                        }}
                    >
                        Selected
                    </th>
                    <th scope="col">Item Name</th>
                    <th scope="col">
                        Amount{" "}
                        <button onClick={sortSpawnedItems}>{`\u25BC`}</button>
                    </th>
                    <th scope="col">GUID</th>
                </tr>
            </thead>
            <tbody>
                {spawnedItems.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <input
                                    className="checkBoxes"
                                    type="checkbox"
                                    checked={objectsToRemove.includes(
                                        item.name
                                    )}
                                    onChange={() => {
                                        handleCheckBox(item.name);
                                    }}
                                />
                            </td>
                            <td className="itemName" key={index + "name"}>
                                {item.name}
                            </td>
                            <td className="count" key={index + "count"}>
                                {item.count}
                            </td>
                            <td key={index + "GUID"}>{item.guid}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default ItemList;
