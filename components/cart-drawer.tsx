"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import { X, Minus, Plus, Trash2, Copy, Mail } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getTotalPrice
  } = useCartStore()

  const totalPrice = getTotalPrice()
  const eggsItem = items.find((item) => item.id === 'huevos-30')
  const showEggsUpsell = eggsItem && eggsItem.quantity > 0 && eggsItem.quantity < 3

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const generateWhatsAppMessage = () => {
    let message = 'Hola ENSYFOODS, quiero realizar un pedido:\n\n'
    items.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} - Q${(item.price * item.quantity).toFixed(2)}\n`
    })
    message += `\n💰 TOTAL: Q${totalPrice.toFixed(2)}\n(Precios incluyen IVA)`
    return encodeURIComponent(message)
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/50256329726?text=${message}`, '_blank')
  }

  const handleCopyOrder = () => {
    let text = 'Pedido ENSYFOODS:\n\n'
    items.forEach((item) => {
      text += `• ${item.quantity}x ${item.name} - Q${(item.price * item.quantity).toFixed(2)}\n`
    })
    text += `\nTOTAL: Q${totalPrice.toFixed(2)}`
    navigator.clipboard.writeText(text)
  }

  const handleEmailOrder = () => {
    let body = 'Pedido ENSYFOODS:%0A%0A'
    items.forEach((item) => {
      body += `• ${item.quantity}x ${item.name} - Q${(item.price * item.quantity).toFixed(2)}%0A`
    })
    body += `%0ATOTAL: Q${totalPrice.toFixed(2)}`
    window.location.href = `mailto:contabilidad@ensyco.gt?subject=Nuevo Pedido ENSYFOODS&body=${body}`
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] z-50 flex flex-col transition-transform duration-[320ms] ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 bg-[#0A0F1E]">
          <div>
            <h2 className="text-white font-black text-xl flex items-center gap-2">
              Tu pedido <span>🛒</span>
            </h2>
            <p className="text-white/35 text-[11px] mt-1 uppercase tracking-wider">
              ENSYFOODS &middot; IVA incluido
            </p>
          </div>
          <button
            onClick={closeCart}
            className="w-[34px] h-[34px] rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#E8752A] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto bg-[#111827] p-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="text-6xl opacity-50">🛒</span>
              <p className="mt-4 text-white/25 text-sm">
                Todavía vacío. ¡Agrega algo rico!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)'
                  }}
                >
                  {/* ✅ CAMBIO: foto del producto en lugar de emoji */}
                  <div className="w-14 h-14 rounded-[10px] overflow-hidden flex-shrink-0 relative"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-[13px] font-bold truncate">
                      {item.name}
                    </h4>
                    <p className="text-white/35 text-[10px]">{item.unit}</p>

                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-white/50 hover:text-[#E8752A] transition-colors"
                        style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-white font-bold text-sm w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-white/50 hover:text-[#E8752A] transition-colors"
                        style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-white/20 hover:text-white/80 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-[#E8752A] font-black text-[16px] flex-shrink-0">
                    Q{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}

              {showEggsUpsell && (
                <div
                  className="p-3 rounded-xl text-[13px]"
                  style={{
                    backgroundColor: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.25)',
                    color: '#6ee7b7'
                  }}
                >
                  💡 Con 3 cartones bajas a Q38.50 c/u
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#0A0F1E] p-5">
          {items.length > 0 && (
            <>
              <div className="flex items-center justify-between text-white/40 text-sm mb-2">
                <span>Subtotal</span>
                <span>Q{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <span className="text-white/30 text-[10px] uppercase tracking-wider block">TOTAL</span>
                  <span className="text-white/70 text-[13px]">IVA incluido</span>
                </div>
                <div className="text-[#E8752A] font-black text-[32px]">
                  <span className="text-[16px] align-super mr-0.5">Q</span>
                  {totalPrice.toFixed(2)}
                </div>
              </div>
            </>
          )}

          <div className="space-y-2">
            <button
              onClick={handleWhatsAppOrder}
              disabled={items.length === 0}
              className="w-full bg-[#25D366] text-white py-4 rounded-xl font-extrabold text-[15px] flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/30 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Pedir por WhatsApp
            </button>

            <button
              onClick={handleEmailOrder}
              disabled={items.length === 0}
              className="w-full py-3 rounded-xl font-bold text-[13px] text-white flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:pointer-events-none"
              style={{
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Mail className="w-4 h-4" />
              Enviar por email
            </button>

            <button
              onClick={handleCopyOrder}
              disabled={items.length === 0}
              className="w-full py-2 text-white/30 text-[12px] flex items-center justify-center gap-1.5 hover:text-white/50 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            >
              <Copy className="w-3 h-3" />
              Copiar pedido
            </button>
          </div>

          <p className="mt-4 text-center text-white/20 text-[10px]">
            Entregas según días de despacho
          </p>
        </div>
      </div>
    </>
  )
}