async function upload() {
  const files = document.getElementById("files").files;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData
  });

  document.getElementById("status").innerText = await res.text();
}