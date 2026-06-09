const getImageUrl = (driveUrl: string) => {
  // Extrai o ID da URL original
  const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const fileId = match ? match[1] : null;
  
  if (!fileId) return driveUrl;
  
  // Retorna a URL no formato correto
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
}

export default getImageUrl;