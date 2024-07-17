export const resizeImage = (url: string, width: number, height: number) => {
  // Assuming imageproxy endpoint structure
  const baseImageUrl = 'https://images.staging.tigerhall.io/';
  const resizeEndpoint = `resize/${width}x${height}/`;

  // Split original URL to get path and file name
  const parts = url.split('/');
  const fileName = parts.pop();
  const path = parts.join('/');

  // Construct the resized image URL
  return `${baseImageUrl}${resizeEndpoint}${path}/${fileName}`;
};
