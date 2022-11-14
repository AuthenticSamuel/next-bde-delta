import Product from "components/Store/Product";
import prisma from "lib/prisma";

const StorePage = async () => {
	const products: any = await prisma.product.findMany();
	return (
		<span className="grid gap-4 grid-cols-4 mx-auto w-2/3 mt-4">
			{products.map((product: StoreItem) => {
				return <Product data={product} />;
			})}
		</span>
	);
};

export default StorePage;
