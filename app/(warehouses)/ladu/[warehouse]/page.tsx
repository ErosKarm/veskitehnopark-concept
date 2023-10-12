const WarehousePage = async ({ params }: { params: { warehouse: string } }) => {
  console.log(params);

  return <div className="bg-blue-700 text-white">{params.warehouse}</div>;
};

export default WarehousePage;
