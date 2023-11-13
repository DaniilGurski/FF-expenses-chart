/* getting data from JSON */
fetch("./json/data.json")
    .then(response => response.json())
    .then(data => createChartColumns(data))



function createChartColumns(data) {
    const chartWrapper = document.querySelector(".chart-wrapper");

    for (dayAmount of data) {
        const columnHeight = (dayAmount.amount / 100) * 150;

        /* group of a column and a week day */ 
        let chartComponent = document.createElement("div")
        chartComponent = addClasses(chartComponent, ["chart-component", "d--f", "fd--c", "ai--c"]);
        
        const chartColumn = document.createElement("div")
        chartColumn.classList.add("chart-component__column");
        chartColumn.dataset.amount = dayAmount.amount;

        const weekDay = document.createElement("span");
        weekDay.classList.add("chart-component__day")
        weekDay.textContent = dayAmount.day;

        /* adding children, adjusting the height of the chart through the parent */
        chartComponent = addChildren(chartComponent, [chartColumn, weekDay]);
        chartComponent.style.height = `${columnHeight}%`;

        chartWrapper.appendChild(chartComponent)
    }

    markHighestColumn([...document.querySelectorAll(".chart-component__column")]);
}


/* the column representing the highest costs is marked with cyan color */
function markHighestColumn(elements) {
    const highestColumn = elements.reduce((p,c) => {
        return c.dataset.amount > p.dataset.amount ? c : p;
    })

    highestColumn.classList.add("chart-component__column--highest")
}


function addClasses(element, classArray) {
    for (className of classArray) {
        element.classList.add(className)
    }
    return element;
}


function addChildren(parent, childArray) {
    for (child of childArray) {
        parent.appendChild(child)
    }
    return parent
}