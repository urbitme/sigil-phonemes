import { sigil, reactRenderer } from 'urbitme-sigil-js'
import Layout, { Row, Main, Container } from 'components/layouts/WideStretched'
import Header from 'components/headers/Underline'

const pre = `
dozmarbinwansamlitsighidfidlissogdirwacsabwissib\
rigsoldopmodfoglidhopdardorlorhodfolrintogsilmir\
holpaslacrovlivdalsatlibtabhanticpidtorbolfosdot\
losdilforpilramtirwintadbicdifrocwidbisdasmidlop\
rilnardapmolsanlocnovsitnidtipsicropwitnatpanmin\
ritpodmottamtolsavposnapnopsomfinfonbanmorworsip\
ronnorbotwicsocwatdolmagpicdavbidbaltimtasmallig\
sivtagpadsaldivdactansidfabtarmonranniswolmispal\
lasdismaprabtobrollatlonnodnavfignomnibpagsopral\
bilhaddocridmocpacravripfaltodtiltinhapmicfanpat\
taclabmogsimsonpinlomrictapfirhasbosbatpochactid\
havsaplindibhosdabbitbarracparloddosbortochilmac\
tomdigfilfasmithobharmighinradmashalraglagfadtop\
mophabnilnosmilfopfamdatnoldinhatnacrisfotribhoc\
nimlarfitwalrapsarnalmoslandondanladdovrivbacpol\
laptalpitnambonrostonfodponsovnocsorlavmatmipfip\
`
const preList = pre.match(/(.{1,3})/g);

const suf = `
zodnecbudwessevpersutletfulpensytdurwepserwylsun\
rypsyxdyrnuphebpeglupdepdysputlughecryttyvsydnex\
lunmeplutseppesdelsulpedtemledtulmetwenbynhexfeb\
pyldulhetmevruttylwydtepbesdexsefwycburderneppur\
rysrebdennutsubpetrulsynregtydsupsemwynrecmegnet\
secmulnymtevwebsummutnyxrextebfushepbenmuswyxsym\
selrucdecwexsyrwetdylmynmesdetbetbeltuxtugmyrpel\
syptermebsetdutdegtexsurfeltudnuxruxrenwytnubmed\
lytdusnebrumtynseglyxpunresredfunrevrefmectedrus\
bexlebduxrynnumpyxrygryxfeptyrtustyclegnemfermer\
tenlusnussyltecmexpubrymtucfyllepdebbermughuttun\
bylsudpemdevlurdefbusbeprunmelpexdytbyttyplevmyl\
wedducfurfexnulluclennerlexrupnedlecrydlydfenwel\
nydhusrelrudneshesfetdesretdunlernyrsebhulryllud\
remlysfynwerrycsugnysnyllyndyndemluxfedsedbecmun\
lyrtesmudnytbyrsenwegfyrmurtelreptegpecnelnevfes\
`
const sufList = suf.match(/(.{1,3})/g);

const Sigil = ({patp, size, colors, margin, className, attributes}) => {
  return (
    <div className={className}>
      {
        sigil({
          patp: patp,
          renderer: reactRenderer,
          size: size,
          colors: colors,
          margin: margin,
          attributes: {
            style: {},
            ...attributes
          }
        })
      }
    </div>
  )
}

Sigil.defaultProps = {
  patp: "zod",
  renderer: reactRenderer,
  size: 256,
  colors: ['black', 'white'],
  margin: false
}

export default function Index() {
  return (
    <Layout className="bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-white transition-colors duration-200">
      <Row>
        <Container>
          <Header />
        </Container>
      </Row>
      <Main>
        <Container>
          <div className="px-4 py-6 sm:px-0">
            <h3 className='text-3xl mb-2'>All Prefixes</h3>
            <div className="font-mono">
              {preList.map((pre, i) => (
                <span key={pre} title={`${pre}: ${i}`} className="inline-block pr-4 mb-2">
                  <span className="block w-8">
                    <Sigil className="hidden dark:block" patp={pre} size={64} colors={["#1F2937", "white"]} />
                    <Sigil className="dark:hidden" patp={pre} size={64} colors={["white", "#1F2937"]} />
                  </span>
                  {pre}
                </span>
              ))}
            </div>

            <h3 className='text-3xl mb-2'>All Suffixes</h3>
            <div className="font-mono">
              {sufList.map((suf, i) => (
                <span key={suf} title={`${suf}: ${i}`} className="inline-block pr-4 mb-2">
                  <span className="block w-8">
                    <Sigil className="hidden dark:block" patp={suf} size={64} colors={["#1F2937", "white"]} />
                    <Sigil className="dark:hidden" patp={suf} size={64} colors={["white", "#1F2937"]} />
                  </span>
                  {suf}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Main>
      <Row className="border-t border-gray-300 bg-gray-200 text-gray-600">
        <Container>
          Footer
        </Container>
      </Row>
    </Layout>
  )
}
