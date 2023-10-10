import { TableOfContents } from "../TableOfContents";
import '../styles/TableOfContents.css';
  
const DummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ipsum nisl, finibus in ultricies at, varius ac nisl. Sed dolor urna, vulputate eget laoreet quis, pretium at leo. Proin aliquam lacinia turpis in ultrices. Sed vestibulum consectetur tortor ut facilisis. Proin sed fermentum ex, vitae efficitur orci. Ut sit amet tincidunt velit. Proin pellentesque suscipit nisl, et varius neque rutrum id. Proin tortor arcu, maximus vitae luctus ut, ullamcorper tincidunt velit. Phasellus dapibus laoreet nisl, non euismod urna iaculis sed. Nulla pharetra sapien eu elit eleifend eleifend. Morbi faucibus risus nibh, sit amet tempus metus tincidunt at. Praesent metus leo, vulputate et fermentum sit amet, aliquet vitae libero.";

const ProjectPage = () => (
    <>

    <div className="project-page project-scrollbar">

        <TableOfContents />
        <main className="project-content project-page-anim">
            <h2 className="second" id="initial-header">Project Overview</h2>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <h2 className="second" id="second-header">Research &amp; Documentation</h2>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <h3 className="third" id="third-header">Building the Product</h3>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <h2 className="second" id="fourth-header">Conclusion</h2>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <h3 className="third" id="fifth-header">Recommendations</h3>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
            <p>{DummyText}</p>
        </main>

    </div>

    </>
)

export default ProjectPage;
