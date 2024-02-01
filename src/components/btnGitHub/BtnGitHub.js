import img from "./gitHub-black.svg";
function BtnGitHub ({link}) {
    return (
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
                    <img src={img} alt="" />
                    GitHub repo
                </a>
    );
}
export default BtnGitHub;