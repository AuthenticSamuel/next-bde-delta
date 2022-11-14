import prisma from "lib/prisma";
import ProductDetails from "components/Store/ProductDetails";

const generateStaticParams = async () => {
	const products = await prisma.product.findMany();
	return products.map(product => ({ slug: product.slug }));
};

const getProductBySlug = async (slug: string) => {
	return await prisma.product.findFirstOrThrow({ where: { slug } });
};

const productDetails = async ({ params }: { params: { slug: string } }) => {
	const product = await getProductBySlug(params.slug);
	return (
		<>
			<div>
				<ProductDetails data={product} />
			</div>
		</>
	);
};

export default productDetails;
