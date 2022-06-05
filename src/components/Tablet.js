import "./styles.css";
import Tagbox from "./Tagbox";

function Tablet(props) {
    let {logo, company, featured, position, postedAt, contract, location,level, role, languages, tools} = props.data;

  let neew = props.data.new;
  return (
    <div className="tablet ">
      <div className="tablet_content">
        <div className="desktop">
          <img className="image" src={logo} alt="" />
          <div className="block">
            <div className="heading">
              <div className="company">
                <p>{company}</p>
              </div>
              <div>{neew && <p className="new">NEW!</p>}</div>
              <div>{featured && <p className="featured">FEATURED</p>}</div>
            </div>

            <div className="title">
              <p>{position}</p>
            </div>
            <div className="details">
              <p>{postedAt}</p>
              <ul className="list">
                <li>{contract}</li>
                <li className="country">{location}</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="line" />
      </div>
      <div className="tags">
        <Tagbox
          onClick={props.onClick}
          tagList={props.tagList}
          tagName={role}
        />
        <Tagbox
          onClick={props.onClick}
          tagList={props.tagList}
          tagName={level}
        />
        {languages.map((e, id) => (
          <Tagbox
            onClick={props.onClick}
            tagList={props.tagList}
            key={`${id}_${id}_languages`}
            tagName={e}
          />
        ))}
        {tools.map((e, id) => (
          <Tagbox
            onClick={props.onClick}
            tagList={props.tagList}
            key={`${id}_${id}_tools`}
            tagName={e}
          />
        ))}
      </div>
    </div>
  );
}

export default Tablet;
