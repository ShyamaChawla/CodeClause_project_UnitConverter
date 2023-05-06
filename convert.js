        let dataInput = document.getElementById("input");
        let dataOutput = document.getElementById("result");
        let dataType = document.getElementById("inputType");
        let outputType = document.getElementById("resultType");
        let optionTo, optionFrom;

        dataInput.addEventListener("keyup", convert)
        dataType.addEventListener("change", convert)
        outputType.addEventListener("change", convert)
        optionFrom = dataType.value;
        optionTo = outputType.value;

        function convert() {
            optionFrom = dataType.value;
            optionTo = outputType.value;
            if (optionFrom === "centimeter") {
                if (optionTo === "meter") {
                    let answer = dataInput.value * 0.01;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "kilometer") {
                    let answer = dataInput.value * 0.00001;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "inches") {
                    let answer = dataInput.value * 0.3937007874;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "centimeter") {
                    let answer = dataInput.value;
                    document.getElementById("result").value = answer;
                }
            }
            else if (optionFrom === "meter") {
                if (optionTo === "meter") {
                    let answer = dataInput.value;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "kilometer") {
                    let answer = dataInput.value * 0.001;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "inches") {
                    let answer = dataInput.value * 39.37007874;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "centimeter") {
                    let answer = dataInput.value * 100;
                    document.getElementById("result").value = answer;
                }
            }

            else if (optionFrom === "kilometer") {
                if (optionTo === "meter") {
                    let answer = dataInput.value * 1000;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "kilometer") {
                    let answer = dataInput.value;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "inches") {
                    let answer = dataInput.value * 39370.07874;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "centimeter") {
                    let answer = dataInput.value * 100000;
                    document.getElementById("result").value = answer;
                }
            }

            else if (optionFrom === "inches") {
                if (optionTo === "meter") {
                    let answer = dataInput.value * 0.0254;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "kilometer") {
                    let answer = dataInput.value * 0.0000254;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "inches") {
                    let answer = dataInput.value;
                    document.getElementById("result").value = answer;
                }
                else if (optionTo === "centimeter") {
                    let answer = dataInput.value * 2.54;
                    document.getElementById("result").value = answer;
                }
            }

        }