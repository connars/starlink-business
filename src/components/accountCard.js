import './accountcard.css';

function AccountCard() {
    return (
        <div className='acc__card'>
            <div className='acc__card-heading'>
                <h4>3AEE5E6A-8188-11ED-98DE-000C29627401 STARLINK</h4>
                <h4>ACC-1800092-48009-6</h4>
            </div>
            <div className='acc__card-balance'>
                <div className='acc__card-balance-wrapper'>
                    <div className='acc__card-balance-heading'>
                         <p>BALANCE DUE</p>
                    </div>
                    <div className='acc__card-balance-value'>
                        <span> $1.10</span>
                    </div>
                    <div className='acc__card-balance-pay'>
                        <button disabled>MAKE A PAYMENT</button>
                    </div>
                    <div className='acc__card-balance-update'>
                        <div>UPDATE PAYMENT METHOD</div>
                    </div>
                </div>
              
            </div>
            <div className='acc__card-setting'>
                <div className='acc__email'>

                </div>
                <div className='acc__phone'>

                </div>
                <div className='acc__adress'>

                </div>
            </div>
            <div className='acc__buttons'>
                 <button>Sign Out</button>   
            </div>
        </div>
    )
}

export default AccountCard;