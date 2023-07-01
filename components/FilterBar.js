import { useContext } from 'react';
import { UserContext } from '@lib/context';
import Loader from "@components/Loader";
import FilterFeed from "@components/FilterFeed";

//CategoryBar
export default function FilterBar(selectedC) {
  const { username } = useContext(UserContext);

  return (
    <nav className="categoryBar">
      <ul>
        <li>
          <div className="label">Filters</div>
        </li>

        <li>
          <div className='space'></div>
        </li>

        {/* categories are fetched */}
        <FilterFeed selectedCategory={selectedC.selectedC}/>

      </ul>
    </nav>
  );
}