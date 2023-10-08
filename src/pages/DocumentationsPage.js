import '../styles/doc-cards.css';
import { GrDocumentPdf } from 'react-icons/gr';
  
const DocumentationsPage = () => (
    <>
    
    <div className="doc-cards docs-page-anim">


        <a className='doc-link' href='#'>
            <div className="doc-card">
                <div className="doc-card-top">
                    <GrDocumentPdf style={{width:"200px",height:"200px"}}/>
                </div>
                <div className="doc-card-container">
                    <h4><b>SRS Document</b></h4> 
                    <p>Project Initialization &amp; bla bla bla</p> 
                </div>
            </div>
        </a>

        <a className='doc-link' href='#'>
            <div className="doc-card">
                <div className="doc-card-top">
                    <GrDocumentPdf style={{width:"200px",height:"200px"}}/>
                </div>
                <div className="doc-card-container">
                    <h4><b>Desing Document</b></h4> 
                    <p>Design bla bla bla</p> 
                </div>
            </div>
        </a>

        <a className='doc-link' href='#'>
            <div className="doc-card">
                <div className="doc-card-top">
                    <GrDocumentPdf style={{width:"200px",height:"200px"}}/>
                </div>
                <div className="doc-card-container">
                    <h4><b>Other Document</b></h4> 
                    <p>bla bla bla</p> 
                </div>
            </div>
        </a>

        <a className='doc-link' href='#'>
            <div className="doc-card">
                <div className="doc-card-top">
                    <GrDocumentPdf style={{width:"200px",height:"200px"}}/>
                </div>
                <div className="doc-card-container">
                    <h4><b>The Other Document</b></h4> 
                    <p>bla bla bla</p> 
                </div>
            </div>
        </a>



    </div>

    </>
)

export default DocumentationsPage;
