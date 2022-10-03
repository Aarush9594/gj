Webcam.set({
    width: 300,
    height: 250,
    image_format: "png",
    png_quality: 100000
  });
  camera = document.getElementById("camera")
  Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = "<img  id='capture_image'  src = '"+data_uri+"'> "             
    })
  }

  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XagBzEpKd/model.json",modelloaded)

  function modelloaded() {
    console.log("Teachable Machine model is loaded")
  }

function predictimage() {
 image = document.getElementById("capture_image")
 classifier.classify(image,gotresult)
}

prediction1 = ""
prediction2 = ""

function gotresult(result,error) {
    if (result.length>0) {
        console.log(result)
            console.log(result)
            document.getElementById("result_emoji_name_1").innerHTML = result[0].label
            document.getElementById("result_emoji_name_2").innerHTML = result[1].label
            prediction1 = result[0].label
            prediction2 = result[1].label
            console.log(result[0].label)
            if (result[0].label=="Victory") {
                document.getElementById("update_emoji_1").innerHTML = "✌"
            }
    
            if (result[0].label=="Amazing") {
                document.getElementById("update_emoji_1").innerHTML = "👌"
            }
    
            if (result[0].label=="Best") {
                document.getElementById("update_emoji_1").innerHTML = "👍"
            }
           
            if (result[1].label=="Amazing") {
                document.getElementById("update_emoji_2").innerHTML = "👌"
            }
    
            if (result[1].label=="Best") {
                document.getElementById("update_emoji_2").innerHTML = "👍"
            }
    
            if (result[1].label=="Victory") {
                document.getElementById("update_emoji_2").innerHTML = "✌"
            }
            
        }
        else {
            console.error(error)
        }
    }

    
    
