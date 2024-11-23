document.getElementById("startButton").addEventListener("click", function () {
    
    document.getElementById("startScreen").style.display = "none";
  
    
    document.getElementById("mainContent").style.display = "block";
  
    const music = document.getElementById("backgroundMusic");
  music.play();
   
    launchConfetti();
  });
  

const quotes = [
    "Guru adalah pelita dalam kegelapan, penuntun di jalan kehidupan.",
    "Tanpa guru, ilmu hanyalah misteri yang tersembunyi.",
    "Guru mengajarkan bukan hanya pengetahuan, tetapi juga kehidupan.",
    "Seorang guru memengaruhi keabadian; ia tak pernah tahu kapan pengaruhnya akan berakhir.",
    "Terima kasih kepada semua guru atas cinta dan bimbingan kalian."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
  }
  
  function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
  
    // Set sumber gambar asli
    modalImage.src = imageSrc;
  
    // Tampilkan modal
    modal.style.display = "flex";
  }
  
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  