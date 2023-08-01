let orderContainer = document.getElementById('orderContainer');

function createOrderElement(order) {
    const orderElement = document.createElement("div");
    orderElement.className = "order";
    orderElement.innerHTML = `
        <p><b>Name:</b> ${order.name}</p>
        <p><b>Gender:</b> ${order.gender}</p>
        <p><b>Major:</b> ${order.major}</p>
        <p><b>Date:</b> ${order.date}</p>
        <p><b>Preferences:</b> ${order.preferences.join(", ")}</p>
        <p><b>Address:</b> ${order.address}</p>
        <p><b>Phone Number:</b> ${order.phoneNumber}</p>
        <hr>
    `;
    return orderElement;
}

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("input[name='name']").value;
    const gender = document.querySelector("select[name='gender']").value;
    const major = document.querySelector("input[name='major']").value;
    const date = document.querySelector("input[name='date']").value;
    const preferences = Array.from(document.querySelectorAll("input[name='preference']:checked"))
                           .map(checkbox => checkbox.value);
    const address = document.querySelector("textarea[name='address']").value;
    const phoneNumber = document.querySelector("input[name='phoneNumber']").value;

    const newOrder = {
        name: name,
        gender: gender,
        major: major,
        date: date,
        preferences: preferences,
        address: address,
        phoneNumber: phoneNumber
    };

    const newOrderElement = createOrderElement(newOrder);
    orderContainer.append(newOrderElement);

    orderForm.reset();
});
