const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));

const Mydata= require('./models/schema.js');

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', {root: __dirname} )
})



mongoose.connect('mongodb+srv://ahmedhamdi252000:VnJxqtOWsmkMyHiQ@cluster0.aiuk7ds.mongodb.net/alldata?retryWrites=true&w=majority&appName=Cluster0').then(() => {
app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
  console.log('MongoDB connected successfully');
})}
).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.post('/', (req, res) => {
  res.sendFile('./views/index.html', {root: __dirname} )
})





// mongoose.connect('mongodb+srv://ahmedhamdi252000:zZ.p-p4SVmE$.JE@cluster0.aiuk7ds.mongodb.net/alldata?retryWrites=true&w=majority&appName=Cluster0');
// mongoose.connection.on('error', (err) => {
//   console.error('MongoDB connection error:', err);
// });
// mongoose.connection.once('open', () => {
//   console.log('MongoDB connected successfully');
// }
// );
// mongoose.connection.on('disconnected', () => {
//   console.log('MongoDB disconnected');
// }

// );
