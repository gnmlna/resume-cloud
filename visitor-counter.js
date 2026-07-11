async function loadVisitorCount() {
    try {
        const response = await fetch(
            "https://byjchah4cg.execute-api.us-east-1.amazonaws.com/prod/visitor"
        );

        const data = await response.json();

        document.getElementById("visitor-count").textContent = data.count;
    } catch (error) {
        console.error("Failed to load visitor count:", error);
        document.getElementById("visitor-count").textContent = "Unavailable";
    }
}

loadVisitorCount();