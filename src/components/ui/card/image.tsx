
export default function Image({ image }: { image: string }) {
    return (
        <a href="#">
            <img className="rounded-t-lg" src={image} alt="" />
        </a>
    );
}