console.log("JS loaded");

async function loadVisitorCount() {
    try {
        console.log("Sending request...");

        const response = await fetch("https://byjchah4cg.execute-api.us-east-1.amazonaws.com/prod/visitor");

        console.log(response);

        const data = await response.json();

        console.log(data);

        document.getElementById("visitor-count").textContent = data.count;
    } catch (error) {
        console.error(error);
    }
}

loadVisitorCount();