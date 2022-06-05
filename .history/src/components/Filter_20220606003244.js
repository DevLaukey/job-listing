function Filter(Props) {
  function handleClick(tagNameTarget) {
    Props.onClick(Props.tagList.filter((tag) => tag !== tagNameTarget));
  }

  if (Props.tagList.length === 0) {
    return "";
  } else {
    return (
      <div className="tablet filter">
          {Props.tagList.map((e, id) => (
            <>
        <div className="option">
              <h1 className="front-end" key={id}>
                {e}
              </h1>
              <div className="icon" onClick={() => handleClick(e)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                  <path
                    fill="#FFF"
                    fill-rule="evenodd"
                    d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
                  />
                </svg>
                </div>
                </>
            </>
          ))}
          <h1 className="clear" onClick={() => Props.onClick([])}>
            Clear
          </h1>
        </div>
    );
  }
}

export default Filter;
