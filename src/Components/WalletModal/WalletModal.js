import "./WalletModal.css";

const wallets = [
  {
    name: "MetaMask",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
    url: "https://metamask.io/download/",
    description: "Popular browser extension wallet",
  },
  {
    name: "Coinbase Wallet",
    icon: "https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo-300x300.webp",
    url: "https://www.coinbase.com/wallet/downloads",
    description: "Wallet by Coinbase",
  },
  {
    name: "Trust Wallet",
    icon: "https://trustwallet.com/assets/images/media/assets/trust_platform.svg",
    url: "https://trustwallet.com/download",
    description: "Mobile and desktop wallet",
  },
];

export const WalletModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div className="wallet-modal" onClick={(e) => e.stopPropagation()}>
        <div className="wallet-modal-header">
          <h2>Connect a Wallet</h2>
          <button className="wallet-modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <p className="wallet-modal-subtitle">
          You need an Ethereum wallet to connect. Install one of the options below, then refresh this page.
        </p>
        <div className="wallet-modal-list">
          {wallets.map((wallet) => (
            <a
              key={wallet.name}
              href={wallet.url}
              target="_blank"
              rel="noopener noreferrer"
              className="wallet-modal-item"
            >
              <img src={wallet.icon} alt={wallet.name} className="wallet-modal-icon" />
              <div className="wallet-modal-info">
                <span className="wallet-modal-name">{wallet.name}</span>
                <span className="wallet-modal-desc">{wallet.description}</span>
              </div>
              <span className="wallet-modal-arrow">&#8594;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
