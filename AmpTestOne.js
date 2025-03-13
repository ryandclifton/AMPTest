define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
                {
                    nameForFeedback: "Islamic",
                    nameForLogging: "Islamic",
                    mediaArray: [
                        { image: "LO.jpg" },
                        { image: "L1.jpg" },
                        { image: "L2.jpg" },
                        { image: "L3.jpg" },
                        { image: "L4.jpg" },
                        { image: "L5.jpg" },
                        { image: "L6.jpg" },
                        { image: "L7.jpg" },
                        { image: "L8.jpg" },
                        { image: "L9.jpg" },
                        { image: "L10.jpg" },
                        { image: "L11.jpg" }
                    ]
                }, 
                {
                    nameForFeedback: "Non-Islamic",
                    nameForLogging: "Non-Islamic",
                    mediaArray: [
                        { image: "MO.jpg" },
                        { image: "M1.jpg" },
                        { image: "M2.jpg" },
                        { image: "M3.jpg" },
                        { image: "M4.jpg" },
                        { image: "M5.jpg" },
                        { image: "M6.jpg" },
                        { image: "M7.jpg" },
                        { image: "M8.jpg" },
                        { image: "M9.jpg" },
                        { image: "M10.jpg" },
                        { image: "M11.jpg" }
                    ]
                }
		],

            examplePrimeStimulus: {
                nameForLogging: "examplePrime",
                mediaArray: [
                    { image: "armchair.jpg" },
                    { image: "lamp.jpg" },
                    { image: "umbrella.jpg" }
                ]
            },

		base_url : {//Where are your images at?
			// image: "https://lillianparker.github.io/images"
            image: "https://lillianparker.github.io/polisci_12/images/"
		}
	});
});
