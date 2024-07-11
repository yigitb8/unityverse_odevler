import { Container, Typography, Grid, Avatar, Paper } from '@mui/material';
import { styled } from '@mui/system';

const AboutMe = () => {

    const Root = styled(Container)({
        padding: '32px',
    });

    const LargeAvatar = styled(Avatar)({
        width: '120px',
        height: '120px',
        margin: 'auto',
    });

    const Section = styled('div')({
        marginBottom: '32px',
    });

    const StyledPaper = styled(Paper)({
        padding: '16px',
        marginBottom: '32px',
    });

    return (
        <Root>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                    <LargeAvatar
                        alt="Profil Fotografi"
                        src="../../assets/profile-image.png"
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h4" gutterBottom> Ben Kimim? </Typography>
                    <StyledPaper>
                        <Section>
                            <Typography variant="h6"> Kısaca Hakkımda </Typography>
                            <Typography variant="body1"> Ben Yiğit Bayrak. Yönetim Bilişim Sistemleri Mezunuyum. Ankarada yaşıyorum. Web Frontend alanında kendimi geliştiriyorum. </Typography>
                        </Section>
                    </StyledPaper>
                    <StyledPaper>
                        <Section>
                            <Typography variant="h6"> Mesleki Deneyim ve Eğitim </Typography>
                            <Typography variant="body1"> Konya Necmettin Erbakan Üniversitesi Yönetim Bilişim Sistemleri bölümünden mezun oldum. </Typography>
                        </Section>
                    </StyledPaper>
                    <StyledPaper>
                        <Section>
                            <Typography variant="h6"> İlgi Alanları ve Hobiler </Typography>
                            <Typography variant="body1"> Eskiden lisanslı basketbolcuydum. Şu anda antrenörlük yapıyorum. </Typography>
                        </Section>
                    </StyledPaper>
                    <StyledPaper>
                        <Section>
                            <Typography variant="h6"> Beceriler ve Yetenekler </Typography>
                            <Typography variant="body1"> Web Geliştirme: React.js, Javascript, Html & Css, SQL | Yazılım haricinde ise Basketbol, Futbol
                            </Typography>
                        </Section>
                    </StyledPaper>
                    <StyledPaper>
                        <Section>
                            <Typography variant="h6"> İletişim Bilgileri </Typography>
                            <Typography variant="body1">
                                E-Posta : yigit.brky@gmail.com |
                                Tel: 0 546 285 3400 |
                                linkedin: |
                                github:
                            </Typography>
                        </Section>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Root>
    );
}
export default AboutMe;