// NodeJS App for GCP Cloud Run Functions deployed via GCP Cloud Build Triggers
// by Eugene
// 2025


exports.helloWorld = (req, res) => {
  const message="<font color='blue'>СloudRunFunction from GCP by Eugene!</font><br><b>App Version 1.02</b>";
  res.status(200).send(message);
};
