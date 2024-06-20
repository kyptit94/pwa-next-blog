export default function getImagePath(url) {
    return url.startsWith('http') ? url : `/images/${url}`;
}