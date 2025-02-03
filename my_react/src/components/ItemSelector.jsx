import React, { useState } from 'react';

export default function ItemSelector() {
    // Available items
    const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];

    // State to track selected items
    const [selectedItems, setSelectedItems] = useState([]);

    // Function to handle item selection
    const handleSelectItem = (item) => {
        // Check if item is already selected
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]); // Add item to the list
        }
    };

    // Function to handle item removal from the selected list
    const handleRemoveItem = (item) => {
        setSelectedItems(selectedItems.filter(selected => selected !== item)); // Remove item from the list
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2>Select Items to Add to the List</h2>

            <div>
                <h3>Available Items</h3>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <button onClick={() => handleSelectItem(item)}>{item}</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Selected Items</h3>
                <ul>
                    {selectedItems.map((item, index) => (
                        <li key={index}>
                            {item} 
                            <button onClick={() => handleRemoveItem(item)} style={{ marginLeft: '10px' }}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
