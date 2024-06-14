
export default function Image({ image }: { image: string }) {
    return (
        <img className="rounded-t-lg" src={image} alt="" />
    );
}