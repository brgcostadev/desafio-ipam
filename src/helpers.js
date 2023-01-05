export default function sortItems(data) {
  return data.sort(function (a, b) {
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  });
}
