import React from 'react'
export interface IModalProps {

    handleModalButtonClick: Function,
    content: string,
    isShow: boolean
}
function ConfirmSaveModal({ content, handleModalButtonClick }: IModalProps) {
    return (

        <div style={{ width: 300 }} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Confirm</h5>
                        <button type="button" onClick={() => handleModalButtonClick("close")} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {content}
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => handleModalButtonClick("close")} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={() => handleModalButtonClick("save")} type="button" className="btn btn-primary">ADD</button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default ConfirmSaveModal