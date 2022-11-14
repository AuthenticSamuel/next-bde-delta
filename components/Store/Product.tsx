import Image from "next/image";
import Link from "next/link";

type Props = {
	data: StoreItem;
};

const Product = (props: Props) => {
	const { data } = props;
	return (
		<div className="card card-compact bg-base-100 shadow-xl">
			<figure>
				<Image
					width={400}
					height={225}
					src={data.preview_image}
					alt="Preview_image"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title mb-20">
					<span>{data.name}</span>
					<span className="ml-auto whitespace-nowrap">{data.price} €</span>
				</h2>
				<div className="card-actions justify-center mt-5">
					<Link
						className="btn btn-primary gap-2 items-center w-full"
						href={`panier/${data.slug}`}
					>
						Acheter
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Product;
