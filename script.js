
function generate() {
  const input = document.getElementById("inputText").value.trim();

  const encoded = encodeURIComponent(input);
  const finalUrl = "https://twitter.com/intent/tweet?&text=" + encoded + "&openExternalBrowser=1";

  document.getElementById("outputText").value = finalUrl;
  document.getElementById("tweetLink").href = finalUrl;
}
