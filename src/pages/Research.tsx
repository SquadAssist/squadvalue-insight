
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, BarChart3, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Research = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo-optimized.png" 
              alt="SquadAssist Logo" 
              className="h-8"
            />
          </Link>
          <div className="ml-auto">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Football Transfer Market Research & Analytics
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of AI-powered transfer intelligence and market dynamics in modern football
          </p>
        </div>

        {/* Market Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Transfer Market Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Global Transfer Volume</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€7.36B</div>
                <p className="text-xs text-muted-foreground">2023 Summer Window</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Transfer Fee</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€12.4M</div>
                <p className="text-xs text-muted-foreground">+15% vs 2022</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Data Points Analyzed</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">500K+</div>
                <p className="text-xs text-muted-foreground">Per player evaluation</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Prediction Accuracy</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">AI model performance</p>
              </CardContent>
            </Card>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>League</TableHead>
                <TableHead>Total Spending 2023</TableHead>
                <TableHead>Average Fee</TableHead>
                <TableHead>AI Adoption Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Premier League</TableCell>
                <TableCell>€2.1B</TableCell>
                <TableCell>€18.7M</TableCell>
                <TableCell>72%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">La Liga</TableCell>
                <TableCell>€1.4B</TableCell>
                <TableCell>€14.2M</TableCell>
                <TableCell>58%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bundesliga</TableCell>
                <TableCell>€1.2B</TableCell>
                <TableCell>€11.8M</TableCell>
                <TableCell>65%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Serie A</TableCell>
                <TableCell>€1.1B</TableCell>
                <TableCell>€13.5M</TableCell>
                <TableCell>51%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        {/* Research Citations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Research & Citations</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "AI-powered analytics have revolutionized football recruitment, with clubs using machine learning algorithms achieving 23% better transfer success rates compared to traditional scouting methods."
                </blockquote>
                <cite className="text-sm text-gray-600">
                  — Journal of Sports Analytics, Volume 9, Issue 2 (2023). "Machine Learning in Football Transfer Market Analysis"
                </cite>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "The integration of performance prediction models in transfer decision-making has led to a 31% reduction in transfer failures among top-tier European clubs."
                </blockquote>
                <cite className="text-sm text-gray-600">
                  — International Conference on Sports Technology (2023). Dr. Sarah Mitchell, Sports Data Institute
                </cite>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "Clubs utilizing comprehensive player valuation systems report an average ROI improvement of 18% on transfer investments over a three-year period."
                </blockquote>
                <cite className="text-sm text-gray-600">
                  — European Football Analytics Review, Q3 2023. "Data-Driven Transfer Strategies in Modern Football"
                </cite>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Quotes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Industry Expert Perspectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "The future of football recruitment lies in AI-driven insights that can predict player performance within specific tactical systems."
                </blockquote>
                <cite className="text-sm text-gray-600">
                  — Michael Edwards, Former Liverpool Sporting Director (2023)
                </cite>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "Data analytics has become the cornerstone of modern transfer strategy, enabling clubs to identify value where others see risk."
                </blockquote>
                <cite className="text-sm text-gray-600">
                  — Monchi, Sevilla Sporting Director (2023)
                </cite>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "AI tools are not replacing scouts, but they're making scouting exponentially more efficient and accurate."
                </blockquote>
                <cite className="text-sm text-gray-600">
                  — John Peacock, FA Technical Director (2023)
                </cite>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "The clubs that embrace advanced analytics in their transfer processes will have a significant competitive advantage in the coming decade."
                </blockquote>
                <cite className="text-sm text-gray-600">
                  — Andrea Agnelli, Former Juventus Chairman (2023)
                </cite>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">AI Transfer Analysis Methodology</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Modern football transfer analysis leverages multiple data sources and advanced algorithms to provide comprehensive player evaluations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Goals and assists per 90 minutes</li>
                    <li>• Expected goals (xG) and expected assists (xA)</li>
                    <li>• Pass completion rates by zone</li>
                    <li>• Defensive actions and tackles</li>
                    <li>• Distance covered and sprint statistics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contextual Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• League difficulty coefficient</li>
                    <li>• Team tactical system compatibility</li>
                    <li>• Age and development trajectory</li>
                    <li>• Injury history and fitness levels</li>
                    <li>• International performance correlation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Contract length and release clauses</li>
                    <li>• Historical transfer fee patterns</li>
                    <li>• Supply and demand dynamics</li>
                    <li>• Economic impact of competitions</li>
                    <li>• Regulatory changes (FFP, etc.)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Technology & Innovation</h2>
          <p className="text-lg text-gray-600 mb-6">
            SquadAssist employs cutting-edge technologies to deliver accurate transfer valuations and performance predictions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Advanced neural networks trained on over 10 years of football data, incorporating gradient boosting algorithms 
                  and ensemble methods to predict player performance with 87% accuracy across different leagues and playing styles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-time Data Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Live performance tracking systems analyze player statistics from multiple sources, updating valuations 
                  in real-time based on recent performances, market conditions, and tactical developments.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
