export const useMenu = async (name = "main") => {
  const linksetData = await fetch(
    `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/system/menu/${name}/linkset`
  );

  const { linkset } = await linksetData.json();

  return linkset[0].item.filter((item: any) => item.hierarchy.length === 1);
};
