import prisma from "lib/prisma";
import Image from "next/image";

type Props = {
	data: StoreItem;
};

const getSizesByProductId = async (productId: string) => {
	const products = await prisma.product.findFirstOrThrow({
		where: { id: productId },
		include: { product_size: true },
	});
	return products;
};

const ProductDetails = async (prop: Props) => {
	const { data } = prop;
	const productsIncludingSize = await getSizesByProductId(data.id);
	return (
		<div className="ml-2 mt-2 w-1/3">
			<Image
				width={400}
				height={225}
				src={data.preview_image}
				alt="Product_image"
				className="mb-2"
			></Image>
			<label
				htmlFor="selectSize"
				className="mr-4"
			>
				Size :
			</label>
			<select
				className="select max-w-xs bg-secondary"
				name="selectSize"
			>
				{productsIncludingSize.product_size.map(size => (
					<option
						className="mr-2 "
						key={size.id}
					>
						{size.name} - {size.quantity}
					</option>
				))}
			</select>
		</div>
	);
};

export default ProductDetails;
