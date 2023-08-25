const SocialButton = ({FacebookIcon,GithubIcon,LinkedinIcon}) => {
  return (
    <>
    <div className="iconos">
      <div className="icofacebook"><FacebookIcon /></div>
      <div className="icogit"><GithubIcon /></div>
      <div className="icolinkedin"><LinkedinIcon /></div>
    </div>
    </>
  )
}

export default SocialButton