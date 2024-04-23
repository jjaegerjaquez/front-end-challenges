import clsx from 'clsx';

const TabLink = ({ active = false, children }) => {
  const classMerged = clsx(
    'py-1.5 px-3 rounded-lg text-[14px] tracking-wide',
    active == true && 'bg-[#6F757C] '
  );

  return (
    <button className={classMerged}>
      {children}
    </button>
  );
}
 
export default TabLink;