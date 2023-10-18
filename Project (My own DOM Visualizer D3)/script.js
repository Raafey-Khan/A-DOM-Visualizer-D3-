
// Create an initial empty DOM representation
const initialDomData = {
    name: 'HTML',
    children: []
};

const width = 1200;
const height = 1200;
const svg = d3.select("#tree-container").append("svg")
    .attr("width", width)
    .attr("height", height);
const treeLayout = d3.tree().size([width, height]);
const treeGroup = svg.append("g").attr("transform", "translate(50, 50)");

// Function to update the DOM visualization
function updateDomVisualization(htmlCode) {
    // Parse the input HTML and create a DOM tree structure
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlCode, "text/html");

    // Convert the DOM tree to a hierarchical data structure
    function createDomTree(node) {
        const data = {
            name: node.tagName || node.textContent.trim(),
            children: []
        };
        for (const child of node.childNodes) {
            if (child.nodeType === Node.ELEMENT_NODE || child.nodeType === Node.TEXT_NODE) {
                data.children.push(createDomTree(child));
            }
        }
        return data;
    }

    const domData = createDomTree(doc.body);

    // Create a hierarchical data structure
    const root = d3.hierarchy(domData);

    // Generate the tree layout
    const treeData = treeLayout(root);

    // Remove existing elements
    treeGroup.selectAll("*").remove();

    // Create links between nodes
    treeGroup.selectAll(".link")
        .data(treeData.links())
        .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.linkHorizontal()
            .x(d => d.y)
            .y(d => d.x)
        );

    // Create nodes
    const nodes = treeGroup.selectAll(".node")
        .data(treeData.descendants())
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.y},${d.x})`);

    // Add circles to represent nodes
    nodes.append("circle")
        .attr("r", 5);

    // Add labels to nodes
    nodes.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.children ? -10 : 10)
        .style("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.name);
}

// Listen for input in the textarea
const textarea = document.getElementById("html-input");
textarea.addEventListener("input", () => {
    updateDomVisualization(textarea.value);
    hljs.highlightBlock(textarea);
});

// Clear Button functionality
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
    textarea.value = '';
    updateDomVisualization('');
});

// Initialize with an empty DOM visualization
updateDomVisualization('');
