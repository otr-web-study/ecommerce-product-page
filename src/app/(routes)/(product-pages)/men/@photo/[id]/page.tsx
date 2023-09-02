export default function Photo({ params }: { params: { id: string } }) {
  return <div> photo {params.id}</div>;
}
