```js
import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
library.add(faChevronDown);

<LoadMoreButton loadMore={function() {alert("Loading more stuff...")}} />
```
