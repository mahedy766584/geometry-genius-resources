function calculateTriangleArea(){
    // triangle base
    const baseField = document.getElementById('triangle-base');
    const baseValueTextString = baseField.value;
    const baseValueTextNumber = parseFloat(baseValueTextString);
    baseField.value = '';
    
    // triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValueString = heightField.value;
    const heightValue = parseFloat(heightValueString);
    heightField.value = '';
    
    // area
    const area = 0.5 * baseValueTextNumber * heightValue;
    
    // triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    const rectangleWidthField = document.getElementById('rectangle-width');
    const rectangleWidthValueString = rectangleWidthField.value;
    const rectangleWidthValue = parseFloat(rectangleWidthValueString);

    const rectangleHeighthField = document.getElementById('rectangle-height');
    const rectangleHeighthFieldValueString = rectangleHeighthField.value;
    const rectangleHeighthFieldValue = parseFloat(rectangleHeighthFieldValueString);

    const rectangleArea = rectangleWidthValue * rectangleHeighthFieldValue;

    const spanArea = document.getElementById('rectangle-area');
    spanArea.innerText = rectangleArea;
}