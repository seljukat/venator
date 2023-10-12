import '../styles/doc-cards.css';
import { GrDocumentPdf } from 'react-icons/gr';
import projectProposal from '../Documents/Project Proposal.pdf';
  
const DocumentationsPage = () => (
    <>
   
    <div className="doc-cards docs-page-anim">

        <a className='doc-link' href={projectProposal} download="Project Proposal.pdf" target='_blank' rel='noreferrer'>
            <div className="doc-card">
                <div className="doc-card-top">
                    <GrDocumentPdf style={{width:"200px",height:"200px"}}/>
                </div>
                <div className="doc-card-container">
                    <h4><b>Project Proposal</b></h4> 
                </div>
            </div>
        </a>

        {/* <a className='doc-link empty' href='#' target='_blank' rel='noreferrer'>
            <div className="doc-card">
                <div className="doc-card-top">
                    <GrDocumentPdf style={{width:"200px",height:"200px"}}/>
                </div>
                <div className="doc-card-container">
                    <h4><b>Design Document</b></h4> 
                </div>
            </div>
        </a>

        <a className='doc-link empty' href='#' target='_blank' rel='noreferrer'>
            <div className="doc-card">
                <div className="doc-card-top">
                    <GrDocumentPdf style={{width:"200px",height:"200px"}}/>
                </div>
                <div className="doc-card-container">
                    <h4><b>Other Document</b></h4> 
                </div>
            </div>
        </a>

        <a className='doc-link empty' href='#' target='_blank' rel='noreferrer'>
            <div className="doc-card">
                <div className="doc-card-top">
                    <GrDocumentPdf style={{width:"200px",height:"200px"}}/>
                </div>
                <div className="doc-card-container">
                    <h4><b>The Other Document</b></h4> 
                </div>
            </div>
        </a> */}

    </div>

    </>
)

export default DocumentationsPage;
