function calculateArea(shape, inputId1, inputId2, resultId) {
    const input1 = parseFloat(document.getElementById(inputId1).value);
    const input2 = parseFloat(document.getElementById(inputId2).value);
    
    if (!isNaN(input1) && !isNaN(input2)) {
        let area = 0;
        
        switch (shape) {
            case 'ellipse':
                area = 3.1416 * input1 * input2;
                break;
            case 'parallelogram':
                area = input1 * input2;
                break;
            case 'rectangle':
                area = input1 * input2;
                break;
            case 'triangle':
                area = .5 * input1 * input2;  
                break;

        }
        
        const result = document.getElementById(resultId);
        result.innerText = `Result: ${area}`;
    } else {
        alert('Please enter valid numeric values.');
    }
}

document.getElementById('btn-ellipse').addEventListener('click', function() {
    calculateArea('ellipse', 'largeNumber', 'smallNumber', 'result');
});

document.getElementById('btn-parallelogram').addEventListener('click', function() {
    calculateArea('parallelogram', 'base', 'height', 'result-para');
});

document.getElementById('btn-rectangle').addEventListener('click',function(){
    calculateArea('rectangle','width','length','result-rectangle');
});

document.getElementById('btn-triangle').addEventListener('click',function(){
    calculateArea('triangle','base-triangle','height-triangle','result-triangle');
}
);
