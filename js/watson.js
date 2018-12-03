function classifierX(){
  console.log('here');
  var inFile = document.getElementById('input').files[0];
  var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
  var fs = require('fs');

  var visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: 'gZYicu6gTtzl5PDWzH7Vk8xXjNvNvWEmHeoj9V9H8HDT'
  });
  var classifier_ids = ['FoodInspection_1361407350'];
  var threshold = 0.6;
  var images_file= fs.createReadStream("/img/b1.jpg"/*inFile*/);
  var params = {
    images_file: images_file,
    classifier_ids: classifier_ids,
    threshold: threshold
  };

  visualRecognition.classify(params, function (err, response) {
      console.log("here");
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
    }
  });
}